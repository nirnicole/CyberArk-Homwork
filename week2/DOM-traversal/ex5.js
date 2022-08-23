// When the generator button is clicked, you should console log the following values for its computer:
//  - The processor ID
//  - The computer’s data-id - also, push this to an array in an object like this: {cmp_id: id}
//  - The BUS number

$('.generator').on('click', function() {
    let processId = $(this).closest("div").attr("id")
    console.log(processId)

    let computerId = $(this).closest("div").parent("div").data().id
    console.log(computerId)

    let bus = $(this).closest("div").parent("div").find("p.bus").text()
    console.log(bus)
  })
  
//   When the validator button is clicked, you should console log the following values for its computer:
//    - The generator’s text
//    - The MB
//    - Both QRs

$('.validator').on('click', function() {
    let genText = $(this).closest("div").parent("div").parent("div").find("button.generator").text()
    console.log(genText)

    let mb = $(this).closest("div").parent("div").parent("div").find("p.mb").text()
    console.log(mb)


    let bothQr = $(this).closest("div").parent("div").parent("div").find("div.processor").children("span")
    console.log(bothQr.text())

  })