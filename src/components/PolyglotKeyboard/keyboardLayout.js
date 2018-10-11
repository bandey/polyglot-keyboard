const commonFirstLine = '{accept} {cancel} {meta-lat} {meta-gre}';
const commonSecondPart = '{alt} {shift} {bksp} {space}';

export default {
  name: 'custom',
  layout: {
    'normal': [
      commonFirstLine,
    ],
    'meta-lat' : [ // Latin lower case
      commonFirstLine,
      commonSecondPart + ' a b c d e f g h i j k l m n o p q r s t u w v x y z',
    ],
    'meta-lat-shift' : [ // Latin upper case
      commonFirstLine,
      commonSecondPart + ' A B C D E F G H I J K L M N O P Q R S T U W V X Y Z',
    ],
    'meta-lat-alt' : [ // Latin punctuation, digits and symbols part 1
      commonFirstLine,
      commonSecondPart + ' \u2014 ` 1 2 3 4 5 6 7 8 9 0 - = / \\ [ ] , . ; \' \u2018 \u2019',
    ],
    'meta-lat-alt-shift' : [ // Latin punctuation, digits and symbols part 2
      commonFirstLine,
      commonSecondPart + ' \u2116 ~ ! @ # $ % ^ & * ( ) _ + ? | { } < > : " \u201c \u201d \u00ab \u00bb',
    ],
    'meta-gre' : [ // Greek lower case
      commonFirstLine,
      commonSecondPart + ' \u03b1 \u03b2 \u03b3 \u03b4 \u03b5 \u03b6 \u03b7 \u03b8 \u03b9 \u03ba \u03bb \u03bc \u03bd \u03be \u03bf \u03c0 \u03c1 \u03c2 \u03c3 \u03c4 \u03c5 \u03c6 \u03c7 \u03c8 \u03c9',
    ],
    'meta-gre-shift' : [ // Greek upper case
      commonFirstLine,
      commonSecondPart + ' \u0391 \u0392 \u0393 \u0394 \u0395 \u0396 \u0397 \u0398 \u0399 \u039a \u039b \u039c \u039d \u039e \u039f \u03a0 \u03a1 \u03a3 \u03a4 \u03a5 \u03a6 \u03a7 \u03a8 \u03a9',
    ],
    'meta-gre-alt' : [ // Greek diacritics and symbols
      commonFirstLine,
      commonSecondPart + ' \u03de \u03e0 \u271d \u02bc \u0375 \u0384 \u25cc\u0345 \u25cc\u0313 \u25cc\u0314 \u25cc\u0308 \u25cc\u0342 \u25cc\u0300 \u25cc\u0301 \u25cc\u0304 \u0387',
    ],
    'meta-gre-alt-shift' : [ // Greek diacritics and symbols repeat
      commonFirstLine,
      commonSecondPart + ' \u03de \u03e0 \u271d \u02bc \u0375 \u0384 \u25cc\u0345 \u25cc\u0313 \u25cc\u0314 \u25cc\u0308 \u25cc\u0342 \u25cc\u0300 \u25cc\u0301 \u25cc\u0304 \u0387',
    ],
  },
  display: {
    "meta-lat": "Lat",
    "meta-gre": "Gre",
    "shift": "\u21e7",
    "bksp": "\u232b",
  },
  beforeInsert: function(e, keyboard, el, textToAdd) {
    return (textToAdd) && (textToAdd[0] === '\u25cc') && (textToAdd.length > 1) ? 
      textToAdd.substring(1) : textToAdd;
  },
};