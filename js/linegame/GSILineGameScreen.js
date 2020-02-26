// Copyright 2017-2020, University of Colorado Boulder

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
  const merge = require( 'PHET_CORE/merge' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenLineGameString = require( 'string!GRAPHING_LINES/screen.lineGame' );

  class GSILineGameScreen extends Screen {

    /**
     * @param {Tandem} tandem
     * @param {Object} [options]
     */
    constructor( tandem, options ) {

      options = merge( {
        name: screenLineGameString,
        backgroundColorProperty: new Property( GLColors.SCREEN_BACKGROUND ),
        homeScreenIcon: GLIconFactory.createGameScreenIcon()
      }, options );

      assert && assert( !options.tandem, 'tandem is a constructor parameter' );
      options.tandem = tandem;

      super(
        () => new GSILineGameModel(),
        model => new GSILineGameScreenView( model ),
        options
      );
    }
  }

  return graphingSlopeIntercept.register( 'GSILineGameScreen', GSILineGameScreen );
} );