package codeUtil;

public class EnviUriConfig {

    public static String getHostedEnnValue() {
        String urlfromconfig = System.getProperty("urlfromconfig");

        if (urlfromconfig == null)

        {
            throw new NullPointerException("Supplied URL not present");

        }
        return urlfromconfig;
    }
}