// Copyright 2017, University of Colorado Boulder

/**
 * Base type for challenge factories in 'Graphing Slope-Intercept' sim. 
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BaseChallengeFactory = require( 'GRAPHING_LINES/linegame/model/BaseChallengeFactory' );
  var GLQueryParameters = require( 'GRAPHING_LINES/common/GLQueryParameters' );
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Util = require( 'DOT/Util' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function GSIChallengeFactory( options ) {

    BaseChallengeFactory.call( this, options );

    // @private pools of slopes and y-intercepts, initialized by initializePools
    this.requiredSlopes = null; // {Fraction[]}
    this.slopes = null; // {Fraction[]}
    this.requiredYIntercepts = null; // {number[]}
    this.yIntercepts = null; // {number[]}
  }

  graphingSlopeIntercept.register( 'GSIChallengeFactory', GSIChallengeFactory );

  return inherit( BaseChallengeFactory, GSIChallengeFactory, {

    /**
     * Initializes the pools of values for slopes and y-intercepts.
     * Must initialize fields identified in constructor.
     * @protected
     */
    initializePools: function() {
      throw new Error( 'must be implemented by subtypes' );
    },

    /**
     * @protected
     * @returns {Fraction}
     */
    chooseRequiredSlope: function() {
      assert && assert( this.requiredSlopes );
      return GSIChallengeFactory.choose( this.requiredSlopes );
    },

    /**
     * @protected
     * @returns {Fraction}
     */
    chooseSlope: function() {
      assert && assert( this.slopes );
      return GSIChallengeFactory.choose( this.slopes );
    },

    /**
     * @protected
     * @returns {number}
     */
    chooseRequiredYIntercept: function() {
      assert && assert( this.requiredYIntercepts );
      return GSIChallengeFactory.choose( this.requiredYIntercepts );
    },

    /**
     * @protected
     * @returns {number}
     */
    chooseYIntercept: function() {
      assert && assert( this.yIntercepts );
      return GSIChallengeFactory.choose( this.yIntercepts );
    }
  }, {

    /**
     * Randomly chooses an item from an array, removes the item from the array.
     * @param {*[]} array
     * @return {*}
     * @public
     * @static
     */
    choose: function( array ) {
      assert && assert( array && array.length > 0, 'array is empty' );
      var index = phet.joist.random.nextIntBetween( 0, array.length - 1 );
      assert && assert( index !== -1 );
      var item = array[ index ];
      array.splice( index, 1 );
      return item;
    },

    /**
     * Converts an integer range to an ordered array of integer values that are in that range.
     * @param {{min:Number, max:Number}} range
     * @param {Object} [options]
     * @returns {number[]}
     * @public
     * @static
     */
    rangeToArray: function( range, options ) {

      assert && assert( Util.isInteger( range.min ) && Util.isInteger( range.max ) );

      options = _.extend( {
        excludeZero: false // {boolean} whether to exclude zero from the array
      }, options );

      var array = [];
      for ( var i = range.min; i <= range.max; i++ ) {
        if ( !options.excludeZero || i !== 0 ) {
          array.push( i );
        }
      }
      return array;
    },

    /**
     * Randomly shuffles an array, unless turned off via query parameter.
     * @param {*[]} array
     * @returns {*[]}
     */
    shuffle: function( array ) {
      if ( GLQueryParameters.shuffleChallenges ) {
        return phet.joist.random.shuffle( array );
      }
      else {
        return array;
      }
    }
  } );
} );

