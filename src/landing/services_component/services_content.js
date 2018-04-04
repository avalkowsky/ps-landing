import htmlParser from 'html-react-parser';

/****
 *
 * Change anything below (inside apostrophes --> 'change this by typing anything you want :)')
 *
 * if you're adding any html to the content (e.g. for bold font, italic etc.), please follow 2 simple steps:
 * - remember to have what is called an import statement in the first line (import htmlParser from 'html-react-parser';)
 * - then surround the copy text with a htmlParser('your text <b> with html tags </b> goes here')
 * **/

export const blockTitle = 'Services';
export const servicesWrittenText = 'Writing Texts That Inspire and Engage your Customers and Builds Trust in your Brand.';
export const servicesBlocksText = {
  copywriting: {
    text: 'Vivamus vulputate mauris sem, sit amet luctus risus blandit lacinia. Sed sagittis mauriso. quam ornare dapibus',
    title: 'copywriting'
  },
  translating: {
    text: htmlParser('Praesent cursus purus nunc. Sed id felis <b>lacinia</b>, semper risus non, luctus diam. Etiam eu lorem arcu. Aenean ut porttitor dolor'),
    title: 'translating'
  },
  marketingStrategies: {
    text: 'Vestibulum a luctus purus. Ut lorem justo, viverra sed augue non, commodo eleifend leoquam ornare dapibus',
    title: 'marketing strategies'
  },
  teaching: {
    text: 'Sed at commodo nisi. Maecenas sed accumsan risus. Quisque congue cursus nibh, nec scelerisque velit.',
    title: 'teaching'
  },
  ux: {
    text: htmlParser('Mauris vehicula eleifend metus, et <b>hendrerit augue</b> ornare id. Quisque <i>congue</i> cursus. Etiam eu lorem arcu'),
    title: 'ux'
  }
};
