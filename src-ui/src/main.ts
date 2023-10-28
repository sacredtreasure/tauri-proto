import { invoke } from "@tauri-apps/cli";
const $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", async function () {
   //get the elements
   const helloEl = $("div.hello")! as HTMLElement;
   
   //hello click 
   helloEl.addEventListener("pointerup", async function() {
    const result = await invoke("hello_world") as string;
    helloEl.textContent = result;
    setTimeout(() => {
     helloEl.textContent = "Click again";   
    }, 1000);
   });
});