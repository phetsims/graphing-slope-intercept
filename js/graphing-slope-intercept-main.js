// Copyright 2017, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var GSILineGameScreen = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/GSILineGameScreen' );
  var Property = require( 'AXON/Property' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var SlopeInterceptScreen = require( 'GRAPHING_LINES/slopeintercept/SlopeInterceptScreen' );
  var Tandem = require( 'TANDEM/Tandem' );

  // strings
  var graphingSlopeInterceptTitleString = require( 'string!GRAPHING_SLOPE_INTERCEPT/graphing-slope-intercept.title' );

  // constants
  var tandem = Tandem.createRootTandem();

  var simOptions = {
    credits: {
      leadDesign: 'Amanda McGarry, Ariel Paul',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      team: 'Bryce Gruneich, Karina K. R. Hensberry, Patricia Loeblein, Kathy Perkins',
      graphicArts: 'Sharon Siman-Tov',
      qualityAssurance: 'Steele Dalton, Alex Dornan, Bryce Griebenow, Ethan Johnson, Elise Morgan, Oliver Orejola, ' +
                        'Benjamin Roberts, Maggie Wiseman, Bryan Yoelin'
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