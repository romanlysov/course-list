import { ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppStore } from '../../../shared/models/store.model';
import { select, Store } from '@ngrx/store';
import { GetAuthor } from '../../actions/add-course.actions';
import { getAuthor } from '../../selectors/add-course.selectors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true,
  }]
})
export class AuthorsComponent implements OnInit, ControlValueAccessor {
  author;
  author$;
  isSuggestionsShow = false;
  authorNames = [];
  authorsRaw = {
    2: '↵AMELIA↵',
    3: '↵OLIVIA↵',
    4: '↵EMILY↵',
    5: '↵AVA↵',
    6: '↵ISLA↵',
    7: '↵JESSICA↵',
    8: '↵POPPY↵',
    9: '↵ISABELLA↵',
    10: '↵SOPHIE↵',
    11: '↵MIA↵',
    12: '↵RUBY↵',
    13: '↵LILY↵',
    14: '↵GRACE↵',
    15: '↵EVIE↵',
    16: '↵SOPHIA↵',
    17: '↵ELLA↵',
    18: '↵SCARLETT↵',
    19: '↵CHLOE↵',
    20: '↵ISABELLE↵',
    21: '↵FREYA↵',
    22: '↵CHARLOTTE↵',
    23: '↵SIENNA↵',
    24: '↵DAISY↵',
    25: '↵PHOEBE↵',
    26: '↵MILLIE↵',
    27: '↵EVA↵',
    28: '↵ALICE↵',
    29: '↵LUCY↵',
    30: '↵FLORENCE↵',
    31: '↵SOFIA↵',
    32: '↵LAYLA↵',
    33: '↵LOLA↵',
    34: '↵HOLLY↵',
    35: '↵IMOGEN↵',
    36: '↵MOLLY↵',
    37: '↵MATILDA↵',
    38: '↵LILLY↵',
    39: '↵ROSIE↵',
    40: '↵ELIZABETH↵',
    41: '↵ERIN↵',
    42: '↵MAISIE↵',
    43: '↵LEXI↵',
    44: '↵ELLIE↵',
    45: '↵HANNAH↵',
    46: '↵EVELYN↵',
    47: '↵ABIGAIL↵',
    48: '↵ELSIE↵',
    49: '↵SUMMER↵',
    50: '↵MEGAN↵',
    51: '↵JASMINE↵',
    52: '↵MAYA↵',
    53: '↵AMELIE↵',
    54: '↵LACEY↵',
    55: '↵WILLOW↵',
    56: '↵EMMA↵',
    57: '↵BELLA↵',
    58: '↵ELEANOR↵',
    59: '↵ESME↵',
    60: '↵ELIZA↵',
    61: '↵GEORGIA↵',
    62: '↵HARRIET↵',
    63: '↵GRACIE↵',
    64: '↵ANNABELLE↵',
    65: '↵EMILIA↵',
    66: '↵AMBER↵',
    67: '↵IVY↵',
    68: '↵BROOKE↵',
    69: '↵ROSE↵',
    70: '↵ANNA↵',
    71: '↵ZARA↵',
    72: '↵LEAH↵',
    73: '↵MOLLIE↵',
    74: '↵MARTHA↵',
    75: '↵FAITH↵',
    76: '↵HOLLIE↵',
    77: '↵AMY↵',
    78: '↵BETHANY↵',
    79: '↵VIOLET↵',
    80: '↵KATIE↵',
    81: '↵MARYAM↵',
    82: '↵FRANCESCA↵',
    83: '↵JULIA↵',
    84: '↵MARIA↵',
    85: '↵DARCEY↵',
    86: '↵ISABEL↵',
    87: '↵TILLY↵',
    88: '↵MADDISON↵',
    89: '↵VICTORIA↵',
    90: '↵ISOBEL↵',
    91: '↵NIAMH↵',
    92: '↵SKYE↵',
    93: '↵MADISON↵',
    94: '↵DARCY↵',
    95: '↵AISHA↵',
    96: '↵BEATRICE↵',
    97: '↵SARAH↵',
    98: '↵ZOE↵',
    99: '↵PAIGE↵',
  };
  surnamesRaw = {
    0: 'Smith↵',
    1: 'Johnson↵',
    2: 'Williams↵',
    3: 'Jones↵',
    4: 'Brown↵',
    5: 'Davis↵',
    6: 'Miller↵',
    7: 'Wilson↵',
    8: 'Moore↵',
    9: 'Taylor↵',
    10: 'Anderson↵',
    11: 'Thomas↵',
    12: 'Jackson↵',
    13: 'White↵',
    14: 'Harris↵',
    15: 'Martin↵',
    16: 'Thompson↵',
    17: 'Garcia↵',
    18: 'Martinez↵',
    19: 'Robinson↵',
    20: 'Clark↵',
    21: 'Rodriguez↵',
    22: 'Lewis↵',
    23: 'Lee↵',
    24: 'Walker↵',
    25: 'Hall↵',
    26: 'Allen↵',
    27: 'Young↵',
    28: 'Hernandez↵',
    29: 'King↵',
    30: 'Wright↵',
    31: 'Lopez↵',
    32: 'Hill↵',
    33: 'Scott↵',
    34: 'Green↵',
    35: 'Adams↵',
    36: 'Baker↵',
    37: 'Gonzalez↵',
    38: 'Nelson↵',
    39: 'Carter↵',
    40: 'Mitchell↵',
    41: 'Perez↵',
    42: 'Roberts↵',
    43: 'Turner↵',
    44: 'Phillips↵',
    45: 'Campbell↵',
    46: 'Parker↵',
    47: 'Evans↵',
    48: 'Edwards↵',
    49: 'Collins↵',
    51: 'Stewart↵',
    52: 'Sanchez↵',
    53: 'Morris↵',
    54: 'Rogers↵',
    55: 'Reed↵',
    56: 'Cook↵',
    57: 'Morgan↵',
    58: 'Bell↵',
    59: 'Murphy↵',
    60: 'Bailey↵',
    61: 'Rivera↵',
    62: 'Cooper↵',
    63: 'Richardson↵',
    64: 'Cox↵',
    65: 'Howard↵',
    66: 'Ward↵',
    67: 'Torres↵',
    68: 'Peterson↵',
    69: 'Gray↵',
    70: 'Ramirez↵',
    71: 'James↵',
    72: 'Watson↵',
    73: 'Brooks↵',
    74: 'Kelly↵',
    75: 'Sanders↵',
    76: 'Price↵',
    77: 'Bennett↵',
    78: 'Wood↵',
    79: 'Barnes↵',
    80: 'Ross↵',
    81: 'Henderson↵',
    82: 'Coleman↵',
    83: 'Jenkins↵',
    84: 'Perry↵',
    85: 'Powell↵',
    86: 'Long↵',
    87: 'Patterson↵',
    88: 'Hughes↵',
    89: 'Flores↵',
    90: 'Washington↵',
    91: 'Butler↵',
    92: 'Simmons↵',
    93: 'Foster↵',
    94: 'Gonzales↵',
    95: 'Bryant↵',
    96: 'Alexander↵',
    97: 'Russell↵',
    98: 'Griffin↵',
    99: 'Diaz↵',
    100: 'Hayes↵',
  };
  @Output() searchedAuthor = new EventEmitter<string>();

  private onChange = (value) => {};
  private onTouched = () => {};

  constructor(private coursesService: CoursesService, private store: Store<AppStore>, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // const names = this.formatRaw(this.authorsRaw);
    // const surnames = this.formatRaw(this.surnamesRaw);
    // const result = names.map((elem, index) => elem + ' ' + surnames[index]);
    // const finalResult = result.reduce((acc, current) => {
    //   const elem: { fullName: string, firstName: string, lastName: string } = {};
    //   elem.fullName = current;
    //   elem.firstName = current.split(' ')[0];
    //   elem.lastName = current.split(' ')[1];
    //   acc[current] = elem;
    //   return acc;
    // }, {});
    // this.coursesService.pushInitialData(finalResult, 'authors');
    this.author$ = this.store.pipe(select(getAuthor));
    this.author$.subscribe(author => {
      if (author) {
        const keys = Object.keys(author);
        const res = keys.reduce((acc, current) => {
          acc.push(author[current]);
          return acc;
        }, []);
        this.author = res;
      }

    });
  }

  formatRaw(raw) {
    const keys = Object.keys(raw);
    const re = /↵/g;
    return keys.reduce((acc, current) => {
      const clearName: string = raw[current].replace(re, '').toLowerCase();
      const formattedFirstChar = clearName[0].toUpperCase() + clearName.slice(1);
      acc.push(formattedFirstChar);
      return acc;
    }, []);
  }

  writeValue(value) {
    this.author = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  updateValue(value) {
    console.log(value);
    this.addAuthor(value);
    this.onChange(this.authorNames);
    this.onTouched();
  }

  addAuthor(author) {
    this.authorNames.push(author);
    this.isSuggestionsShow = false;

  }

  searchAuthor(value) {
    this.isSuggestionsShow = true;
    const formattedValue = value[0].toUpperCase() + value.slice(1);
    this.searchedAuthor.emit(formattedValue);

  }

  removeAuthor(author) {
    const indexOfDeletingAuthor = this.authorNames.indexOf(author);
    this.authorNames.splice(indexOfDeletingAuthor, 1);
  }
}
