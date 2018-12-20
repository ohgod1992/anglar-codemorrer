import {Component} from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/selection/active-line'
const defaults = {
  markdown:
    '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
  'text/typescript':
    `const component = {
  name: "@ctrl/ngx-codemirror",
  author: "Scott Cooper",
  repo: "https://github.com/typectrl/ngx-codemirror"
};
const hello: string = 'world';`,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  mode = 'text/x-mysql';
  options: any = {
    lineNumbers: true,
    mode: this.mode,
    theme: 'default',
    styleActiveLine:true,
    extraKeys: {
      'Tab': 'autocomplete',
    }
  };
  defaults = defaults;
  content = '';

  changeMode() {
    this.options = {
      ...this.options,
      mode: this.mode,
    };
  }

  handleChange($event) {
    console.log('ngModelChange', $event);
  }

  clear() {
    this.defaults[this.mode] = '';
  }
}
