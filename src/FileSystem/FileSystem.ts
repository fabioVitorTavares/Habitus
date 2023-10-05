import * as FileSystem from "expo-file-system";
import * as Crypto from "expo-crypto";
import { HabitoT } from "../Types/Types";

export async function getHabitos() {
  try {  
    const habitosDirectory = FileSystem.documentDirectory ?? "" + "habitos/";
    const files = await FileSystem.readDirectoryAsync(habitosDirectory);
    const readFilesPromises = files.map((file) => {
      return FileSystem.readAsStringAsync(`${habitosDirectory}${file}`);
    });
    const resultsReadFiles = await Promise.allSettled(readFilesPromises);
    const arrayHabitos: HabitoT[] = [];
    resultsReadFiles.flatMap((result) => {
      if (result.status === "fulfilled") {
        if (result.value.includes("uuid")) {
          arrayHabitos.push(JSON.parse(result.value));
        }
      }
    });
    return arrayHabitos;
  } catch (e) {
    console.log(`Erro em getHabitos. Erro: ${e}.`) 
  }
}

export async function saveHabito(habito:HabitoT){  
  try {
    const habitoSaving = { ...habito, uuid: Crypto.randomUUID() };
    const nameFile = habitoSaving.uuid;
    const habitosDirectory = FileSystem.documentDirectory ?? "" + "habitos/";
    const fileUri = `${habitosDirectory}${nameFile}`;
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(habitoSaving));
    const habitos = await getHabitos();
    return habitos;
  } catch (e) {
    console.log(`Erro em saveHabito. Erro: ${e}.`);
  }  
}