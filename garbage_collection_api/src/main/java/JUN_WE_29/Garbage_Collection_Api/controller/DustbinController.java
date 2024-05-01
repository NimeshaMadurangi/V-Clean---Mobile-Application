package JUN_WE_29.Garbage_Collection_Api.controller;


import JUN_WE_29.Garbage_Collection_Api.controller.dto.request.DustbinRequestDTO;
import JUN_WE_29.Garbage_Collection_Api.controller.dto.response.DustbinResponseDTO;
import JUN_WE_29.Garbage_Collection_Api.service.DustbinService;
import jakarta.annotation.security.RolesAllowed;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Dustbins")
@AllArgsConstructor
public class DustbinController {

    private DustbinService dustbinService;

    @RolesAllowed("ADMIN")
    @PostMapping
    public DustbinResponseDTO addDusbin(@RequestBody DustbinRequestDTO dustbinRequestDTO){
        return dustbinService.addDustbin(dustbinRequestDTO);
    }

    @RolesAllowed({"USER","ADMIN"})
    @GetMapping
    public List<DustbinResponseDTO> readAllDusbin(){
        return dustbinService.readAllDustbin();
    }

    @RolesAllowed({"USER","ADMIN"})
    @GetMapping("/{id}")
    public DustbinResponseDTO readDusbinById(@PathVariable Long id){
        return dustbinService.readDustbin(id);
    }

    @RolesAllowed("ADMIN")
    @DeleteMapping("/{id}")
    public void deleteDustbin(@PathVariable Long id){
        dustbinService.deleteDustbin(id);
    }

    @RolesAllowed("ADMIN")
    @PutMapping("/{id}")
    public DustbinResponseDTO updateDustbin(@RequestBody DustbinRequestDTO dustbinRequestDTO,@PathVariable Long id){
        return dustbinService.updateDustbin(dustbinRequestDTO,id);
    }
}
