
const pageComps = import.meta.glob('../views/**/index.vue')
// const routes =[]
 const routes = Object.entries(pageComps).map(([path,meta]) => {
  const pathJSPath = path
  // console.log(path,'path');
  // console.log(meta,'meta');
  path = path.replace('../views','').replace('/index.vue','') || '/'
  const name = path.split('/').filter(Boolean).join('-') || 'index'
  const comPath = pathJSPath.replace('page.js','index.vue')
  // console.log(name,'name');
  // console.log(comPath,'comPath');

  return {
    path,
    name,
    component: pageComps[comPath],
    meta
  }
})
// console.log(b);
  
export default routes