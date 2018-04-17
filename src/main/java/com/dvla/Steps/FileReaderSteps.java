package com.dvla.Steps;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.activation.MimetypesFileTypeMap;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import static org.apache.commons.io.FilenameUtils.getExtension;

/**
 * @author Denis E
 *
 * File reader steps
 */

public class FileReaderSteps
{
    public static void main( String[] args ) {

        try {
            // Open the Excel file
            FileInputStream fis = new FileInputStream("C:\\CarRegistrationVerification\\src\\main\\resources\\TestData\\CarDetails.xlsx");

            // Access the required test data sheet
            XSSFWorkbook wb = new XSSFWorkbook(fis);
            XSSFSheet sheet = wb.getSheet("Sheet1");

            // Loop through all rows in the sheet
            // Start at row 1 as row 0 is the header row

            int tt = sheet.getLastRowNum();
            for(int count = 1;count<=6;count++){
                XSSFRow row = sheet.getRow(count);

                //XSSFRow sourceRow = sourceSheet.getRow(row);
                XSSFCell RegNo=row.getCell(0);
                XSSFCell Vehmake=row.getCell(1);
                XSSFCell Vehcolour=row.getCell(2);

                String RegistrationNo = RegNo.getStringCellValue();
                String VehicleMake = Vehmake.getStringCellValue();
                String VehicleColour = Vehcolour.getStringCellValue();

                System.out.println("Registration No of row :"+count+"   "+ RegistrationNo);
                System.out.println("Vehicle Make of row : "+count+"   "+VehicleMake);
                System.out.println("Vehicle Colour of row : "+count+"   "+ VehicleColour);
            }
            fis.close();

            File folder = new File("C:\\CarRegistrationVerification\\src\\main\\resources\\TestData");
            File[] listOfFiles = folder.listFiles();

            for (int i = 0; i < listOfFiles.length; i++) {
                if (listOfFiles[i].isFile()) {
                    System.out.println("File " + listOfFiles[i].getName());
                } else if (listOfFiles[i].isDirectory()) {
                    System.out.println("Directory " + listOfFiles[i].getName());
                }
            }

            String fileName = "C:\\CarRegistrationVerification\\src\\main\\resources\\TestData\\CarDetails.xlsx";
            MimetypesFileTypeMap mimeTypesMap = new MimetypesFileTypeMap();

            //by file name
            String mimeType = mimeTypesMap.getContentType(fileName);
            System.out.println(mimeType);

            //or by actual File instance
            File file = new File(fileName);
            mimeType = mimeTypesMap.getContentType(file);
            System.out.println(mimeType);

            System.out.println(getFileSizeBytes(file));
            System.out.println(getFileSizeKiloBytes(file));
            System.out.println(getFileSizeMegaBytes(file));

            //get the file extension
            System.out.println(getExtension(file.getName()));

        } catch (IOException e) {
            System.out.println("Test data file not found");
        }
    }

    //Function to calculate the file size in mb
    private static String getFileSizeMegaBytes(File file) {
        return (double) file.length() / (1024 * 1024) + " mb";
    }

    //Function to calculate the file size in kb
    private static String getFileSizeKiloBytes(File file) {
        return (double) file.length() / 1024 + "  kb";
    }

    //Function to calculate the file size in bytes
    private static String getFileSizeBytes(File file) {
        return file.length() + " bytes";
    }

}
