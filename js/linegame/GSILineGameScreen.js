// Copyright 2017, University of Colorado Boulder

/**
 * The 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var GLColors = require( 'GRAPHING_LINES/common/GLColors' );
  var GLIconFactory = require( 'GRAPHING_LINES/common/view/GLIconFactory' );
  var GSILineGameModel = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSILineGameModel' );
  var GSILineGameScreenView = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/view/GSILineGameScreenView' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenLineGameString = require( 'string!GRAPHING_LINES/screen.lineGame' );

  /**                                                          
   * @param {Tandem} tandem
   * @param {Object} [options]
   * @constructor
   */
  function GSILineGameScreen( tandem, options ) {

    options = _.extend( {
      name: screenLineGameString,
      backgroundColorProperty: new Property( GLColors.SCREEN_BACKGROUND ),
      homeScreenIcon: GLIconFactory.createGameScreenIcon()
    }, options );

    assert && assert( !options.tandem, 'tandem is a constructor parameter' );
    options.tandem = tandem;

    Screen.call( this,
      function() { return new GSILineGameModel(); },
      function( model ) { return new GSILineGameScreenView( model ); },
      options );
  }

  graphingSlopeIntercept.register( 'GSILineGameScreen', GSILineGameScreen );

  return inherit( Screen, GSILineGameScreen );
} );