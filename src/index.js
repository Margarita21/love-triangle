/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var kol = 0;
for (var i = 1; i <= preferences.length; i++) {
	for (var j = 0; j < preferences.length; j++) {
	if(i === preferences[j])
	    {
			var preferences1 = preferences[i-1];
			var index2 = j + 1;
			for( var j1=0; j1 < preferences.length; j1++)
			{
				if( index2 === preferences[j1] )
				{
					if( preferences1 === ( j1 + 1 ) )
					{
						kol = kol + 1;
					}
				}
			}		
	    }
    }
}
  return Math.trunc( kol / 3 );
};
