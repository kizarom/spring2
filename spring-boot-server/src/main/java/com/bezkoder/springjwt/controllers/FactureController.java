package com.bezkoder.springjwt.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Facture;
import com.bezkoder.springjwt.exception.ResourceNotFoundException;
import com.bezkoder.springjwt.repository.FactureRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test/admin")
public class FactureController {
    @Autowired
    FactureRepository factureRepository;

    // get all facture
    @GetMapping("/factures")
    public List<Facture> getAllFactures() {
        return factureRepository.findAll();
    }

    // create facture rest api
    @PostMapping("/factures")
    public Facture createFacture(@RequestBody Facture facture) {
        return factureRepository.save(facture);
    }

    // get membre by id rest api
	@GetMapping("/factures/{id}")
	public ResponseEntity<Facture> getFactureById(@PathVariable Long id) {
		Facture facture = factureRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("facture not exist with id :" + id));
		return ResponseEntity.ok(facture);
    }
    
	// update membre rest api
	
	@PutMapping("/factures/{id}")
	public ResponseEntity<Facture> updateFacture(@PathVariable Long id, @RequestBody Facture membreDetails){
		Facture membre = factureRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("membre not exist with id :" + id));
		
        membre.setDescription(membreDetails.getDescription());
        membre.setDate_em(membreDetails.getDate_em());
        membre.setDate_rec(membreDetails.getDate_rec());
        membre.setMontant(membreDetails.getMontant());
		
		Facture updatedMembre = factureRepository.save(membre);
		return ResponseEntity.ok(updatedMembre);
	}
	
	// delete membre rest api
	@DeleteMapping("/factures/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFacture(@PathVariable Long id){
		Facture membre = factureRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("membre not exist with id :" + id));
		
        factureRepository.delete(membre);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}