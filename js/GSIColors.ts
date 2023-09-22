// Copyright 2023, University of Colorado Boulder

/**
 * Colors used throughout this project.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import graphingSlopeIntercept from './graphingSlopeIntercept.js';
import { ProfileColorProperty } from '../../scenery/js/imports.js';

const GSIColors = {

  // Background color used for all screens
  screenBackgroundColorProperty: new ProfileColorProperty( graphingSlopeIntercept, 'screenBackgroundColor', {
    default: 'rgb( 226, 255, 249 )'
  } )
};

graphingSlopeIntercept.register( 'GSIColors', GSIColors );

export default GSIColors;