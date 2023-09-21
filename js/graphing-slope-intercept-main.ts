// Copyright 2017-2023, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import SlopeInterceptScreen from '../../graphing-lines/js/slopeintercept/SlopeInterceptScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import GraphingSlopeInterceptStrings from './GraphingSlopeInterceptStrings.js';
import GSILineGameScreen from './linegame/GSILineGameScreen.js';
import GSIColors from './GSIColors.js';

simLauncher.launch( () => {

  const screens = [
    new SlopeInterceptScreen( Tandem.ROOT.createTandem( 'slopeInterceptScreen' ), GSIColors.screenBackgroundColorProperty ),
    new GSILineGameScreen( Tandem.ROOT.createTandem( 'lineGSILineGameScreen' ), GSIColors.screenBackgroundColorProperty )
  ];

  const sim = new Sim( GraphingSlopeInterceptStrings[ 'graphing-slope-intercept' ].titleStringProperty, screens, {
    credits: {
      leadDesign: 'Amanda McGarry, Ariel Paul',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      team: 'Bryce Gruneich, Karina K. R. Hensberry, Patricia Loeblein, Kathy Perkins',
      graphicArts: 'Megan Lai, Sharon Siman-Tov',
      qualityAssurance: 'Steele Dalton, Alex Dornan, Bryce Griebenow, Ethan Johnson, Elise Morgan, Liam Mulhall, ' +
                        'Oliver Orejola, Laura Rea, Benjamin Roberts, Jacob Romero, Maggie Wiseman, Kathryn Woessner, ' +
                        'Bryan Yoelin'
    }
  } );

  sim.start();
} );