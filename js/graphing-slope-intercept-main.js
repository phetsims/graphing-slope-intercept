// Copyright 2017, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var LineGameScreen = require( 'GRAPHING_LINES/linegame/LineGameScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var SlopeInterceptScreen = require( 'GRAPHING_LINES/slopeintercept/SlopeInterceptScreen' );
  var SlopeScreen = require( 'GRAPHING_LINES/slope/SlopeScreen' );
  var Tandem = require( 'TANDEM/Tandem' );

  // strings
  var graphingSlopeInterceptTitleString = require( 'string!GRAPHING_SLOPE_INTERCEPT/graphing-slope-intercept.title' );

  // constants
  var tandem = Tandem.createRootTandem();

  var options = {
    credits: {
      leadDesign: 'Ariel Paul',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      team: 'Bryce Gruneich, Karina K. R. Hensberry, Patricia Loeblein,\nAmanda McGarry, Kathy Perkins',
      graphicArts: 'Sharon Siman-Tov',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan,\nOliver Orejola, Benjamin Roberts, Bryan Yoelin'
    }
  };

  SimLauncher.launch( function() {
    var screens = [
      new SlopeScreen( tandem.createTandem( 'slopeScreen' ) ),
      new SlopeInterceptScreen( tandem.createTandem( 'slopeInterceptScreen' ) ),
      new LineGameScreen( tandem.createTandem( 'lineGameScreen' ) )
    ];
    var sim = new Sim( graphingSlopeInterceptTitleString, screens, options );
    sim.start();
  } );
} );