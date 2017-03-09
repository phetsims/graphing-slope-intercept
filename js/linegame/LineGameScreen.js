// Copyright 2017, University of Colorado Boulder

/**
 * The 'Line Game' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var LineGameModel = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/model/LineGameModel' );
  var LineGameView = require( 'GRAPHING_SLOPE_INTERCEPT/linegame/view/LineGameView' );
  var GLColors = require( 'GRAPHING_LINES/common/GLColors' );
  var GLIconFactory = require( 'GRAPHING_LINES/common/view/GLIconFactory' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenLineGameString = require( 'string!GRAPHING_LINES/screen.lineGame' );

  /**                                                          
   * @param {Tandem} tandem
   * @constructor
   */
  function LineGameScreen( tandem ) {

    var options = {
      name: screenLineGameString,
      backgroundColorProperty: new Property( GLColors.SCREEN_BACKGROUND ),
      homeScreenIcon: GLIconFactory.createGameScreenIcon(),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new LineGameModel(); },
      function( model ) { return new LineGameView( model ); },
      options );
  }

  graphingSlopeIntercept.register( 'LineGameScreen', LineGameScreen );

  return inherit( Screen, LineGameScreen );
} );