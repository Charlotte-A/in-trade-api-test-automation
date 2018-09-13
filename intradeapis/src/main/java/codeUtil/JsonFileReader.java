package codeUtil;

//import java.nio.file.Files;
//import java.nio.file.Paths;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class JsonFileReader {


    public static String getJsonData(String myPath) throws IOException {
        Path currentRelativePath = Paths.get(myPath);
        String myTestData  = new String(Files.readAllBytes(currentRelativePath.toAbsolutePath()));
        return myTestData;
    }
}
