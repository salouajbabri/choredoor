# choredoor
CodeAcademy Chrome Door Project
const form=document.querySelector('#form')
const fname=document.querySelector('#fname')
const lname=document.querySelector('#lname')
const age=document.querySelector('#age')
const email=document.querySelector('#email')
const adresse=document.querySelector('#adresse')
const obj=document.querySelector('#obj')
const loisirs=document.querySelector('#loisirs')


form.addEventListener("submit",e=>
{
    e.preventDefault()
    
    form_verify();
})
function form_verify()
{
    const fname = fname.value
    const lname = lname.value
    const age = age.value
    const email = email.value
    const adresse = adresse.value
    if (fname === "")
    {
        let message ="cette case ne doit pas etre vide ";
        SetError (fname , message );
    }
    else if (!fname.toUpperCase[0]=== fname[0])
    {
      let message ="le prénom doit commencer par une majuscule ";
      SetError (fname, message );
    }
    else {
        SetSuccess ( fname )
    }
    
var str ="lname"; 
for (var i=0 ; i < str.length ;i++  )
{
   if (! lname.toUpperCase[i]=== lname[i]){
   let message ="le nom doit etre en majuscule  ";
   SetError (lname , message );
}
else {
    SetSuccess ( lname )
}
}
var number = age   
if (number.value <=18 )
{
    let message ="le candidat doit avoir au moins 18 ans   ";
   SetError(age , message );
}
else {
    SetSuccess ( age )
}
var str="email"
if (! email_verify(email))
{
    let message =" l'email n'est pas valide ";
    SetError (email , message );

}
else 
{
    SetSuccess ( email )
}
}
var str ="adresse"
if (! adresse ==="") 
{
    let message ="cette case ne doit pas etre vide ";
    SetError (adresse , message );
}
else if (( str.value.length > 300) )
{
    let message ="cette case ne doit pas dépasser 300 caractères ";
        SetError (adresse , message );
}
else {
    SetSuccess ( adresse )
}
var str="obj"
for(i=0;i<str.length;i++)
{
    if( str[i].charCodeAt >033 && str[i].charCodeAt < 0193 )
    {
        let message ="l'objectif ne doit pas contenir des caractères spéciaux "
        SetError(obj , message );
    }
    else {
        SetSuccess ( obj)
    }
var str="loisirs"
    for(i=0;i<str.length;i++)
    {
        if( str[i].charCodeAt>033 && str[i].charCodeAt< 0193 )
        {
            let message ="les loisirs ne doit pas contenir des caractères spéciaux "
            SetError(loisirs , message );
        }
        else 
        {
            SetSuccess ( loisirs)
        }
}
function SetError(elem, message)
{
    const formControl = elem.parentElement ;
    const small = formControl.querySelector('small');
    small.innerText = message 
    formControl.className =" form-control error ";
}   
function SetSuccess(elem)
{
    const formControl = elem.parentElement ;
    formControl.className =" form-control error ";
}
function email_verify(email)
{
    return /^[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
