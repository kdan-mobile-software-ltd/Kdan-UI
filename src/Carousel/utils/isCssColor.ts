import type { CarouselProps } from '../index';

type IndicatorColor = CarouselProps['indicatorColor'];

export type CssColor = IndicatorColor & { _brand: 'cssColor' };

// The source of regex: https://gist.github.com/olmokramer/82ccce673f86db7cda5e
// eslint-disable-next-line
const colorRegex = new RegExp(/^(rgb|hsl)a?\((\d+%?(deg|rad|grad|turn)?[,\s]+){2,3}[\s\/]*[\d\.]+%?\)$/, 'i');

const isCssColor = (value: IndicatorColor): value is CssColor => {
  if (!value || typeof value !== 'string') return false;

  if (value.charAt(0) === '#') {
    const hexColor = value.substring(1);
    return [3, 4, 6, 8].indexOf(hexColor.length) > -1 && !Number.isNaN(parseInt(hexColor, 16));
  } else {
    return colorRegex.test(value);
  }
};

export default isCssColor;
