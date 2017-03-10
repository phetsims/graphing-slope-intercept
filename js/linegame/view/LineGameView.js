// Copyright 2017, University of Colorado Boulder

/**
 * View for the 'Line Game' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BaseGameView = require( 'GRAPHING_LINES/linegame/view/BaseGameView' );
  var GLRewardNode = require( 'GRAPHING_LINES/linegame/view/GLRewardNode' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var inherit = require( 'PHET_CORE/inherit' );

  // images
  var level1Image = require( 'image!GRAPHING_LINES/Level_1.png' );
  var level3Image = require( 'image!GRAPHING_LINES/Level_3.png' );
  var level5Image = require( 'image!GRAPHING_LINES/Level_5.png' );
  var level6Image = require( 'image!GRAPHING_LINES/Level_6.png' );

  /**
   * @param {LineGameModel} model
   * @constructor
   */
  function LineGameView( model ) {

    // Images for the level-selection buttons, ordered by level.
    // Uses level images from graphing-lines, assigns them to different levels that their file names indicate.
    var levelImages = [
      level1Image,
      level3Image,
      level5Image,
      level6Image
    ];

    // functions that create nodes for the game reward, ordered by level
    var rewardFactoryFunctions = [
      GLRewardNode.createGraphNodes,
      GLRewardNode.createPointToolNodes,
      GLRewardNode.createPaperAirplaneNodes,
      GLRewardNode.createSmileyFaceNodes
    ];

    BaseGameView.call( this, model, levelImages, rewardFactoryFunctions );
  }

  graphingSlopeIntercept.register( 'LineGameView', LineGameView );

  return inherit( BaseGameView, LineGameView );
} );
