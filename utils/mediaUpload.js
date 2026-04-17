import { createClient } from "@supabase/supabase-js";


let url="https://nlubppzkvkdhjjlumzsn.supabase.co";
let key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdWJwcHprdmtkaGpqbHVtenNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MzUzNDQsImV4cCI6MjA5MTExMTM0NH0.6UUzOZr_Sgjb7B26I0IR2wQXp9itqb1KwGyw2IjDmuE";
const supabase = createClient(url, key);

export default function uploadMedia(file) {
    
    return new Promise(
        (resolve, reject) => {
            if(file==null) {
                reject("No file selected");
            }else {
                const timestamp = new Date().getTime();
                const fileName = timestamp + "_" + file.name;
            
            	supabase.storage.from("images").upload(fileName, file,{
                upsert:false,
                cacheControl: "3600"
                    }).then(()=>{
                        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                        resolve(publicUrl);

                } ).catch((error)=>{
                        reject(error);
                    });

        }
    }
    )                                    

}


