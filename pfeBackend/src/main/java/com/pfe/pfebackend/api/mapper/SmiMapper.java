package com.pfe.pfebackend.api.mapper;
import com.pfe.pfebackend.api.dto.SmiDTO;
import com.pfe.pfebackend.api.entity.Smi;
import org.springframework.stereotype.Component;

@Component
public class SmiMapper {
    public Smi map(SmiDTO dto) {
        return Smi.builder()
                .studentNum(dto.getStudentNum())
                .remarque(dto.getRemarque())
                .build();
    }

    public SmiDTO map(Smi smi) {
        return SmiDTO.builder()
                .studentNum(smi.getStudentNum())
                .remarque(smi.getRemarque())
                .build();
    }
}
