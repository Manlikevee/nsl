// Array of image URLs
const imageUrls = [
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Dominos-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/MTN-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Lagos-Internal-Revenue-Service.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Bolt-Stack-Blue_200304_153027.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Betway-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/carbon-dark.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Axa-mansard-_-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Abia-State-University.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/GIGM-Plain_180827_172142.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/IrokoTV-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Smile-Plain_180827_172218.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Cowrywise-dark.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Dominos-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/MTN-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Lagos-Internal-Revenue-Service.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Bolt-Stack-Blue_200304_153027.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Betway-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/carbon-dark.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Axa-mansard-_-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Abia-State-University.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/GIGM-Plain_180827_172142.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/IrokoTV-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Smile-Plain_180827_172218.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Cowrywise-dark.svg'


    // Add more image URLs as needed
  ];
  
  // Function to create and append image elements to the accordion div
  function appendImagesToAccordionDiv() {
    const accordionDiv = document.getElementById('accordiondiv');
  
    // Loop through the imageUrls array
    for (const imageUrl of imageUrls) {
      // Create a new image element
      const imgElement = document.createElement('img');
  
      // Set the source attribute to the URL from the array
      imgElement.src = imageUrl;
  
      // Optionally, you can set other attributes and styles for the image element here
      // Example: imgElement.alt = 'Image description';
  
      // Append the image element to the accordion div
      accordionDiv.appendChild(imgElement);
    }
  }
  
  // Call the function to append images to the accordion div
  appendImagesToAccordionDiv();
  