// Copyright 2024, University of Colorado Boulder

/**
 * Constants that are specific to the 'Line Game' screen in Graphing Slope-Intercept.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import graphingSlopeIntercept from '../graphingSlopeIntercept.js';
import ClimberPortrayalAfrica from './view/portrayals/ClimberPortrayalAfrica.js';
import ClimberPortrayalAfricaModest from './view/portrayals/ClimberPortrayalAfricaModest.js';
import ClimberPortrayalAsia from './view/portrayals/ClimberPortrayalAsia.js';
import ClimberPortrayalLatinAmerica from './view/portrayals/ClimberPortrayalLatinAmerica.js';
import ClimberPortrayalOceania from './view/portrayals/ClimberPortrayalOceania.js';
import ClimberPortrayalUSA from './view/portrayals/ClimberPortrayalUSA.js';

const GSILineGameConstants = {

  // Region and Culture: portrayals for the icons on level-selection buttons
  CLIMBER_PORTRAYALS: [
    ClimberPortrayalAfrica,
    ClimberPortrayalAfricaModest,
    ClimberPortrayalAsia,
    ClimberPortrayalLatinAmerica,
    ClimberPortrayalOceania,
    ClimberPortrayalUSA
  ]
};

graphingSlopeIntercept.register( 'GSILineGameConstants', GSILineGameConstants );

export default GSILineGameConstants;