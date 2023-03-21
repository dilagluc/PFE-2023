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
public class StageDecouverteDTO {

    private Long studentNum;
    
    private String entreprise;
    
    private Integer telEntreprise;
    
    private String emailEntreprise;
    
    private Integer duree;
    
    private String sujet;
    
    private String tuteur;
    
    private Integer telTuteur;
    
    private Date dateSoutenace;
    
    private Integer creneauxSoutenance;
}
