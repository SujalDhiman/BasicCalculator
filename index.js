let val1=""
let val2=""
let operator=""
let btn1=document.querySelectorAll(".btn")
btn1.forEach((element,index)=>
{
   btn1[index].addEventListener("click",()=>
                                          {
                                             set1(btn1[index].innerText)
                                          })
})

function set1(element)
{
    let ans1=document.querySelector("#pwd")
    let prev=ans1.value
    let curr=element
    if(prev!="")
    {
    let ans=prev+curr
    ans1.value=ans
    }
    else
    {
      ans1.value=curr
    }
}

let oper=document.querySelectorAll(".operand")

oper.forEach((element,index)=>
               {
                  oper[index].addEventListener("click",()=>
                                                {
                                                   operator=oper[index].innerText
                                                   store()
                                                })
               })

function store()
{
   let retrieve=document.querySelector("#pwd")
   val1=retrieve.value
   retrieve.value=""
}

let res=document.querySelector(".result")
res.addEventListener("click",fans)

function fans()
{
   let retrieve2=document.querySelector("#pwd")
   val2=retrieve2.value
   retrieve2.value=""
   if(operator=="+")
   {
      let n1=parseFloat(val1)
      let equaltwo="="
      let n2=parseFloat(val2)
      let add=n1+n2
      retrieve2.value=add
      let display1=document.querySelector("#display")
      display1.value=equaltwo+val1+operator+val2
      console.log(val1)
      console.log(val2)
      console.log(operator)
   }
   else if(operator=="%")
   {
      let n1=parseFloat(val1)
      let equaltwo="="
      let n2=parseFloat(val2)
      let add=n1%n2
      retrieve2.value=add
      let display1=document.querySelector("#display")
      display1.value=equaltwo+val1+operator+val2
      console.log(val1)
      console.log(val2)
      console.log(operator)
   }
   else if(operator=="-")
   {
      let n1=parseFloat(val1)
      let equaltwo="="
      let n2=parseFloat(val2)
      let add=n1-n2
      retrieve2.value=add
      let display1=document.querySelector("#display")
      display1.value=equaltwo+val1+operator+val2
      console.log(val1)
      console.log(val2)
      console.log(operator)
   }
   else if(operator=="*")
   {
      operator="×"
      let equaltwo="="
      let n1=parseFloat(val1)
      let n2=parseFloat(val2)
      let add=n1*n2
      retrieve2.value=add
      let display1=document.querySelector("#display")
      display1.value=equaltwo+val1+operator+val2
      console.log(val1)
      console.log(val2)
      console.log(operator)
   }
   else
   {
      let n1=parseFloat(val1)
      let equaltwo="="
      let n2=parseFloat(val2)
      let add=n1/n2
      retrieve2.value=add.toFixed(7)
      let display1=document.querySelector("#display")
      display1.value=equaltwo+val1+operator+val2
      console.log(val1)
      console.log(val2)
      console.log(operator)
   }
}

let cb=document.querySelector(".clearButton")
cb.addEventListener("click",()=>
                           {
                              let clear1=document.querySelector("#pwd")
                              let display2=document.querySelector("#display")
                              clear1.value=""
                              val1=""
                              val2=""
                              operator=""
                              display2.value=""

                           })
