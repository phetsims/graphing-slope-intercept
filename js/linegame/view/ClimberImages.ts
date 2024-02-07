// Copyright 2024, University of Colorado Boulder

/**
 * Responsible for all images for the Level Climber in Graphing Slope Intercept. Collects the images to support selecting a
 * different climber character for localization.
 *
 * @author Luisa Vargas
 */

import ClimberPortrayalUSA from './ClimberPortrayalUSA.js';
import ClimberPortrayalAfrica from './ClimberPortrayalAfrica.js';
import ClimberPortrayalAfricaModest from './ClimberPortrayalAfricaModest.js';
import ClimberPortrayalAsia from './ClimberPortrayalAsia.js';
import ClimberPortrayalLatinAmerica from './ClimberPortrayalLatinAmerica.js';
import ClimberPortrayalOceania from './ClimberPortrayalOceania.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';

const ClimberImages = {
  CLIMBER_PORTRAYALS: [
    ClimberPortrayalAfrica,
    ClimberPortrayalAfricaModest,
    ClimberPortrayalAsia,
    ClimberPortrayalLatinAmerica,
    ClimberPortrayalOceania,
    ClimberPortrayalUSA
  ]
};

graphingSlopeIntercept.register( 'ClimberImages', ClimberImages );
export default ClimberImages;