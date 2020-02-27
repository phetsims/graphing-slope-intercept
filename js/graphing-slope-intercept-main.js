// Copyright 2017-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../axon/js/Property.js';
import SlopeInterceptScreen from '../../graphing-lines/js/slopeintercept/SlopeInterceptScreen.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import graphingSlopeInterceptStrings from './graphing-slope-intercept-strings.js';
import GSILineGameScreen from './linegame/GSILineGameScreen.js';

const graphingSlopeInterceptTitleString = graphingSlopeInterceptStrings[ 'graphing-slope-intercept' ].title;

// constants
const tandem = Tandem.ROOT;

const simOptions = {
  credits: {
    leadDesign: 'Amanda McGarry, Ariel Paul',
    softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
    team: 'Bryce Gruneich, Karina K. R. Hensberry, Patricia Loeblein, Kathy Perkins',
    graphicArts: 'Megan Lai, Sharon Siman-Tov',
    qualityAssurance: 'Steele Dalton, Alex Dornan, Bryce Griebenow, Ethan Johnson, Elise Morgan, Liam Mulhall, ' +
                      'Oliver Orejola, Laura Rea, Benjamin Roberts, Jacob Romero, Maggie Wiseman, Katie Woessner, ' +
                      'Bryan Yoelin'
  }
};

const screenOptions = {
  backgroundColorProperty: new Property( 'rgb( 226, 255, 249 )' ) // light blue-green
};

SimLauncher.launch( () => {
  const screens = [
    new SlopeInterceptScreen( tandem.createTandem( 'slopeInterceptScreen' ), screenOptions ),
    new GSILineGameScreen( tandem.createTandem( 'lineGSILineGameScreen' ), screenOptions )
  ];
  const sim = new Sim( graphingSlopeInterceptTitleString, screens, simOptions );
  sim.start();
} );