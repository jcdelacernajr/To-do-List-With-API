package com.netzontech.todolistwithapi.util;


import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;

public class Util {

    public static Timestamp getTimestamp() {
        return new Timestamp(System.currentTimeMillis());
    }
       
    public static Date getCurrentDate() {
    	LocalDate localDate = LocalDate.now();
        return Date.valueOf(localDate);
    }
}
