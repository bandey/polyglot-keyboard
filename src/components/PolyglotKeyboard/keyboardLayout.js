const commonFirstLine = '{accept} {cancel} {meta-lat} {meta-ext} {meta-gre}';
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
    'meta-ext' : [ // Extended latin lower case
      commonFirstLine,
      commonSecondPart + ' \u00e0 \u00e1 \u00e2 \u00e3 \u00e4 \u00e5 \u0105 \u0107 \u010d \u00e7 \u010f \u00e8 \u00e9 \u00ea \u011b \u00eb \u0119 \u0131 \u00ec \u00ed \u00ee \u0129 \u00ef \u0144 \u0148 \u00f1 \u00f2 \u00f3 \u00f4 \u00f5 \u00f6 \u0159',
    ],
    'meta-ext-shift' : [ // Extended latin upper case
      commonFirstLine,
      commonSecondPart + ' \u00c0 \u00c1 \u00c2 \u00c3 \u00c4 \u00c5 \u0104 \u0106 \u010c \u00c7 \u010e \u00c8 \u00c9 \u00ca \u011a \u00cb \u0118 \u00cc \u00cd \u00ce \u0128 \u00cf \u0143 \u0147 \u00d1 \u00d2 \u00d3 \u00d4 \u00d5 \u00d6 \u0158',
    ],
    'meta-ext-alt' : [ // Extended latin lower case part 2
      commonFirstLine,
      commonSecondPart + ' \u015b \u0161 \u015f \u0165 \u021b \u00f9 \u00fa \u00fb \u0169 \u00fc \u016f \u00fd \u00ff \u017a \u017e \u017c \u00e6 \u0153 \u0111 \u00df \u0142',
    ],
    'meta-ext-alt-shift' : [ // Extended latin upper case part 2
      commonFirstLine,
      commonSecondPart + ' \u015a \u0160 \u015e \u0164 \u021a \u00d9 \u00da \u00db \u0168 \u00dc \u016e \u00dd \u0178 \u0179 \u017d \u017b \u00c6 \u0152 \u0110 \u0141',
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
    "meta-ext": "Ext",
    "meta-gre": "Gre",
    "shift": "\u21e7",
    "bksp": "\u232b",
  },
  beforeInsert: function(e, keyboard, el, textToAdd) {
    return (textToAdd) && (textToAdd[0] === '\u25cc') && (textToAdd.length > 1) ? 
      textToAdd.substring(1) : textToAdd;
  },
};