import{o as t,c as r,t as o,ad as s,i as a,a as n,j as _,f as d,bS as l,p}from"./index-4cf287ad.js";import{V as m}from"./VImg-aad06642.js";const u={class:"text-center mb-4"},h={key:0,class:"text-h1 font-weight-medium"},f={key:1,class:"text-h5 font-weight-medium mb-3"},g={key:2},x={__name:"ErrorHeader",props:{errorCode:{type:String,required:!1},errorTitle:{type:String,required:!1},errorDescription:{type:String,required:!1}},setup(c){const e=c;return(i,v)=>(t(),r("div",u,[e.errorCode?(t(),r("h1",h,o(e.errorCode),1)):s("",!0),e.errorTitle?(t(),r("h5",f,o(e.errorTitle),1)):s("",!0),e.errorDescription?(t(),r("p",g,o(e.errorDescription),1)):s("",!0)]))}},y="/assets/404-df5d1da7.png";const k={class:"misc-wrapper"},V={class:"misc-avatar w-100 text-center"},S={__name:"[...all]",setup(c){return(e,i)=>(t(),r("div",k,[a(x,{"error-code":"404","error-title":"Page Not Found ⚠️","error-description":"We couldn't find the page you are looking for."}),n("div",V,[a(m,{src:_(y),alt:"Coming Soon","max-width":800,class:"mx-auto"},null,8,["src"]),a(l,{to:"/",class:"mt-10"},{default:d(()=>[p(" Back to Home ")]),_:1})])]))}};export{S as default};
