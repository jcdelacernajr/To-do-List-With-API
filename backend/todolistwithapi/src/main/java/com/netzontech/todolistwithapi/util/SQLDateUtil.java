package com.netzontech.todolistwithapi.util;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class SQLDateUtil {
	
	 public static Timestamp getSSQLTimestamp(String strDate) throws ParseException  {
		// Create a SimpleDateFormat with the desired pattern
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        // Parse the input date string
        java.util.Date utilDate = dateFormat.parse(strDate);
        // Convert utilDate to SQL Timestamp
        return new Timestamp(utilDate.getTime());
    }

}
