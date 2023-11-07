/// <reference types= "cypress" />

describe('apitest', () => {
  const randomISBN = Math.floor(Math.random()*1555)
  const randomAISLE = Math.floor(Math.random()*8888)
  it('test post mathod', () => {
    const requsestbody=
    {
      name:"Qa private Zoom",
      isbn:randomISBN,
      aisle:randomAISLE,
      author:"ibrahim"
      }
      
    cy.request({
      mathod :"POST",
      url :"https://rahulshettyacademy.com/Library/Addbook.php",
      body : requsestbody
    }).then((Response)=>{
      cy.log(Response.body)
      expect(Response.status).to.eq(200)
      expect(Response.body.Msg).to.eq("successfully added")
    })
  })
  it('test get mathode', () => {
    cy.request({
      mathod:"GET",
      url :`https://rahulshettyacademy.com/Library/GetBook.php?ID=${randomISBN}${randomAISLE}`,


    }).then((Response)=>{
      cy.log(Response.body[0].book_name)
      expect(Response.status).to.eq(200)
      expect(Response.body[0].author).to.eq("ibrahim")

    })

    
  });
})