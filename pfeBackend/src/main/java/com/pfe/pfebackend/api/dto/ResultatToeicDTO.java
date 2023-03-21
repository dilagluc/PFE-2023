package com.pfe.pfebackend.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class ResultatToeicDTO {
    private Long studentNum;
    private String score;
    private Date date;
    private String remarque;
}
