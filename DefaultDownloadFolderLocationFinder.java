import java.io.*;

public class DefaultDownloadFolderLocationFinder {
    private static final String REGSTR_TOKEN = "REG_EXPAND_SZ";
    private static final String PERSONAL_FOLDER_CMD = "reg query \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders\" /v {374DE290-123F-4565-9164-39C4925E467B}";
    public static String getCurrentUserPersonalFolderPath() {
        try {
            Process process = Runtime.getRuntime().exec(PERSONAL_FOLDER_CMD);
            StreamReader reader = new StreamReader(process.getInputStream());

            reader.start();
            process.waitFor();
            reader.join();

            String result = reader.getResult();

            int p = result.indexOf(REGSTR_TOKEN);

            if (p == -1)
                return null;

            return result.substring(p + REGSTR_TOKEN.length()).trim(); // prints "D:\Downloads"
        }
        catch (Exception e) {
            return null;
        }
    }
    static class StreamReader extends Thread {
        private InputStream is;
        private StringWriter sw;

        StreamReader(InputStream is) {
            this.is = is;
            sw = new StringWriter();
        }

        public void run() {
            try {
                int c;
                while ((c = is.read()) != -1)
                    sw.write(c);
            }
            catch (IOException ignored) {

            }
        }
        String getResult() {
            return sw.toString();
        }
    }

    public static void main(String[] s) {
        System.out.println();
    }
}