// Copyright 2017-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const GSILineGameScreen = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/GSILineGameScreen' );
  const Property = require( 'AXON/Property' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const SlopeInterceptScreen = require( 'GRAPHING_LINES/slopeintercept/SlopeInterceptScreen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const graphingSlopeInterceptTitleString = require( 'string!GRAPHING_SLOPE_INTERCEPT/graphing-slope-intercept.title' );

  // constants
  var tandem = Tandem.rootTandem;

  var simOptions = {
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

  var screenOptions = {
    backgroundColorProperty: new Property( 'rgb( 226, 255, 249 )' ) // light blue-green
  };

  SimLauncher.launch( function() {
    var screens = [
      new SlopeInterceptScreen( tandem.createTandem( 'slopeInterceptScreen' ), screenOptions ),
      new GSILineGameScreen( tandem.createTandem( 'lineGSILineGameScreen' ), screenOptions )
    ];
    var sim = new Sim( graphingSlopeInterceptTitleString, screens, simOptions );
    sim.start();
  } );
} );