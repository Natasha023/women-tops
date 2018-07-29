import data from '../Resource/data.js';

/**
 * Get all clothes data
 */
export function  getAllClothes(){
    return [].concat(data);

}

/**
 * function to filter the clothes list by input size
 * @param {*} val: cloth size
 */
export function filterBySize(val){
  const clothes = [].concat(data);
  const arr = [];
  if(val ==='all' || val === 'All'){ return clothes}
  clothes.forEach(function(n, i){

      if(n.size.indexOf(val)!==-1){
          arr.push(n)
      }

  });

  return arr;
}

/**
 * Get unique size list for filter dropdown
 */
export function getSizeForDropdown(){
    const clothes = [].concat(data);
    //Get all size list
    let allSizeArr = clothes.reduce((result,cloth)=> {
        return result.concat(cloth.size);
    }, [])
    // Using set to remove duplicated size
    let sizeSet = new Set(allSizeArr);
    let sizeOptions = []
    sizeSet.forEach((size)=> sizeOptions.push({label: size, value: size }));
    return sizeOptions;
}