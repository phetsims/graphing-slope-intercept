// Copyright 2017-2019, University of Colorado Boulder

/**
 * The 'Line Game' screen in the 'Graphing Slope-Intercept' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const GLColors = require( 'GRAPHING_LINES/common/GLColors' );
  const GLIconFactory = require( 'GRAPHING_LINES/common/view/GLIconFactory' );
  const graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  const GSILineGameModel = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/GSILineGameModel' );
  const GSILineGameScreenView = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/view/GSILineGameScreenView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenLineGameString = require( 'string!GRAPHING_LINES/screen.lineGame' );

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