// https://archive.ics.uci.edu/dataset/26/connect+4

export default async function connectFourDataInstaller(){
    const res = await fetch("https://archive.ics.uci.edu/static/public/26/connect+4.zip"); 
    return res.json();
}