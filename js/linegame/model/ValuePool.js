// Copyright 2017, University of Colorado Boulder

//TODO move this to graphing-lines?
/**
 * ValuePool takes sets of values and separates them into "required" and "optional" values,
 * and provides an API for randomly selection them.
 * Used in the game to create sets of slopes and y-intercepts for challenges.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var graphingSlopeIntercept = require( 'GRAPHING_SLOPE_INTERCEPT/graphingSlopeIntercept' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Util = require( 'DOT/Util' );

  /**
   * @param {*[][]} arrays - the sets of values
   * @constructor
   */
  function ValuePool( arrays ) {

    var self = this;

    // @private 1 value from each array is "required"
    this.requiredValues = [];
    arrays.forEach( function( array ) {
      assert && assert( array instanceof Array );
      self.requiredValues.push( ValuePool.choose( array ) );
    } );

    // @private the remaining values are optional
    this.optionalValues = _.flatten( arrays );
  }

  graphingSlopeIntercept.register( 'ValuePool', ValuePool );

  return inherit( Object, ValuePool, {

    /**
     * Randomly selects a required value, and removes it from the set of required values.
     * @returns {*}
     * @public
     */
    chooseRequired: function() {
      assert && assert( this.requiredValues.length > 0, 'required values is empty' );
      return ValuePool.choose( this.requiredValues );
    },

    /**
     * Randomly selects an optional value, and removes it from the set of optional values.
     * @returns {*}
     * @public
     */
    chooseOptional: function() {
      assert && assert( this.optionalValues.length > 0, 'optional values is empty' );
      return ValuePool.choose( this.optionalValues );
    },

    /**
     * Is the required pool empty?
     * @returns {boolean}
     */
    isEmpty: function() {
      return ( this.requiredValues.length === 0 );
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
    }
  } );
} );
