console.log('hello world')

// declare a variabie and assign it a prompt
// put the amil inside the mailbox
// var prompt = prompt('what is your name?');

// display the letter that we save is the mailbox to the Comment
// console.log(prompt)

// if (10 > 9) {
//   console. log("yes 10 is greater than 9");
// } else {
//   console.log('this is false')
// }

 function areYouOldEnough (age) {
   var age = prompt('what is your age?');

   if (age < 18 && typeof age === "string") {
     alert('you are a minor');
   } else if (age >= 18 && age <= 60) {
     alert('you are an adult!')
   } else {
    alert('dam you are old!') 
   }
 } 



function introduction (age, name, location) {
  console.log(age)
  console.log(name)
  console.log(location)
  console.log('My age is ' + age +' my name is ' + name + ' My location is ' + location  )
}   

introduction(18, 'sanjida', 'bronx')

function uploadAndIdentifyPlantID() {
  // grt the photo from the input button 
  var photoInput = document.getElementById('photoInput');
  console.log(photoInput)
  console.log(photoInput.files[0]);

  // if no photo was selcted and the usrt clicks on suvmit
// alert tothe user to upload a [hoto first
  if (photoInput.files.length === 0) {
    alert('please select a photo');
  return
  }  

  // selectt the first file from the upload button 
  // and store it in a variable
  var selectedFile = photoInput.files[0];

 // create a new file reader object sp we can read the contrn of the file 
  var reader = new FileReader();

  // set up event handler when the sumit button is clicked 
  // to read the file and stare setting up the api call
  reader.onload = function (e) {
    
    // storr the base64image in a vaeible
    var base64Image = e.target.result;
    console.log(base64Image);

    
    var apiKey = 'MsyfBz4bd54Pa6GTQCvcnwrtU1TG7ULrSDFAeJZSiCklzEBpaA';
    var latitude = 49.207;
    var longtitude = 16.608;
    var health = 'all';
    var similarImages = true;
    var details = 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods,treatment,cause';
    var language = 'en';
    var apiPlantIDUrl = 'https://plant.id/api/v3/identification?details=${details}&language=${language}';
  }

  // make our first API call to the plant ID database
  // with the BASE64 image
 axios.post(
   apiPlantIDUrl,
   {
     images: [base64Image],
     iatitude: latitude,
     longtitude: longtitude,
     health: health,
      similarImages:  similarImages
   },
   {
     headers: {
       'Api-Key': apiKey,
       'Conten-Type': 'application/json'
     }
   }
 ) 
}