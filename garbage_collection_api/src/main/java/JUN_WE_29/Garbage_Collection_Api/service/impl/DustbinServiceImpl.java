package JUN_WE_29.Garbage_Collection_Api.service.impl;

import JUN_WE_29.Garbage_Collection_Api.controller.dto.request.DustbinRequestDTO;
import JUN_WE_29.Garbage_Collection_Api.controller.dto.response.DustbinResponseDTO;
import JUN_WE_29.Garbage_Collection_Api.model.Dustbin;
import JUN_WE_29.Garbage_Collection_Api.repository.DustbinRepository;
import JUN_WE_29.Garbage_Collection_Api.service.DustbinService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DustbinServiceImpl implements DustbinService {

    private DustbinRepository dustbinRepository;

    @Override
    public DustbinResponseDTO addDustbin(DustbinRequestDTO dustbinRequestDTO) {
        Dustbin dustbin = new Dustbin();
        dustbin.setName(dustbinRequestDTO.getName());
        dustbin.setLocation(dustbinRequestDTO.getLocation());

        dustbinRepository.save(dustbin);

        DustbinResponseDTO dustbinResponseDTO = new DustbinResponseDTO();
        dustbinResponseDTO.setName(dustbin.getName());

        return dustbinResponseDTO;
    }

    @Override
    public List<DustbinResponseDTO> readAllDustbin() {
        List<Dustbin>dustbinList = dustbinRepository.findAll();
        List<DustbinResponseDTO> dustbinResponseDTOList = new ArrayList<>();

        for (Dustbin dustbin : dustbinList) {
            DustbinResponseDTO dustbinResponseDTO = DustbinResponseDTO.builder()
                    .name(dustbin.getName())
                    .location(dustbin.getLocation())
                    .quantity(dustbin.getQuantity())
                    .smell(dustbin.getSmell())
                    .build();
            dustbinResponseDTOList.add(dustbinResponseDTO);
        }
        return dustbinResponseDTOList;
    }

    @Override
    public DustbinResponseDTO readDustbin(Long id) {
        Optional<Dustbin> dustbinOptional = dustbinRepository.findById(id);

        if (dustbinOptional.isPresent()) {
            Dustbin dustbin = dustbinOptional.get();

            return new DustbinResponseDTO(dustbin.getName(),dustbin.getQuantity(),dustbin.getSmell(),dustbin.getLocation());
        }
        return null;
    }

    @Override
    public void deleteDustbin(Long id) {
        dustbinRepository.deleteById(id);
    }

    @Override
    public DustbinResponseDTO updateDustbin(DustbinRequestDTO dustbinRequestDTO, Long id) {
        Optional<Dustbin> dustbinOptional = dustbinRepository.findById(id);
        if (dustbinOptional.isPresent()) {
            Dustbin dustbin = dustbinOptional.get();
            dustbin.setName(dustbinRequestDTO.getName());
            dustbin.setLocation(dustbinRequestDTO.getLocation());
            dustbinRepository.save(dustbin);
        }
        DustbinResponseDTO responseDTO = DustbinResponseDTO.builder()
                .name(dustbinRequestDTO.getName())
                .location(dustbinRequestDTO.getLocation())
                .build();
        return responseDTO;
    }


}


