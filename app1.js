const calculate =()=>{
    let Vaccine = document.getElementById("vaccine");
    let selectedVaccine = Vaccine.options[Vaccine.selectedIndex].text;
    let selectedVaciineValue =Vaccine.value;

    var radios = document.getElementsByName('dose');
    var selectedDose;
    for (var radio of radios) {
        if (radio.checked) {
            selectedDose=parseInt(radio.value);
        }
    }

    let perdoseVac1 = 300;
    let perdoseVac2 = 720;
    let perdoseVac3 = 900;
    let perdoseVac4 = 400;
    let perdoseVac5 = 250;
    let perdoseVac6 = 280;

    var para;

    
    if(selectedVaciineValue==='1'){
        if(selectedDose===1){
            para =`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac1} ruppes only `; 
        }else if(selectedDose===2){
                            
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${(selectedDose*perdoseVac1)-50} ruppes only `; 
        }else if(selectedDose===3){
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac1-150} ruppes only `; 
        }

    }else if(selectedVaciineValue==='2'){
        if(selectedDose===1){
            para =`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac2} ruppes only `; 
        }else if(selectedDose===2){
                            
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac2-50} ruppes only `; 
        }else if(selectedDose===3){
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac2-150} ruppes only `; 
        }
    }else if(selectedVaciineValue==='3'){
        if(selectedDose===1){
            para =`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac3} ruppes only `; 
        }else if(selectedDose===2){
                            
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac3-50} ruppes only `; 
        }else if(selectedDose===3){
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac3-150} ruppes only `; 
        }

    }else if(selectedVaciineValue==='4'){
        if(selectedDose===1){
            para =`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac4} ruppes only `; 
        }else if(selectedDose===2){
                            
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac4-50} ruppes only `; 
        }else if(selectedDose===3){
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac4-150} ruppes only `; 
        }

    }else if(selectedVaciineValue==='5'){
        if(selectedDose===1){
            para =`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac5} ruppes only `; 
        }else if(selectedDose===2){
                            
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac5-50} ruppes only `; 
        }else if(selectedDose===3){
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac5-150} ruppes only `; 
        }

    }else if(selectedVaciineValue==='6'){
        if(selectedDose===1){
            para =`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac6} ruppes only `; 
        }else if(selectedDose===2){
                            
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac6-50} ruppes only `; 
        }else if(selectedDose===3){
            para=`For ${selectedVaccine} with ${selectedDose} dose will cost ${selectedDose*perdoseVac6-150} ruppes only `; 
        }

    }    
    
    document.getElementById("result").innerHTML=para;

}