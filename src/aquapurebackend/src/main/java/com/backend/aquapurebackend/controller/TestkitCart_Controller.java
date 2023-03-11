package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.exception.TestkitCartItemNotFoundException;
import com.backend.aquapurebackend.model.TestkitCartItem;
import com.backend.aquapurebackend.repository.TestkitCartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TestkitCart_Controller {
    @Autowired
    private TestkitCartItemRepository testkitCartItemRepository;

    @PostMapping("/TestkitCartItem")
    TestkitCartItem newTestkitCartItem(@RequestBody TestkitCartItem newTestkitCartItem) {
        return testkitCartItemRepository.save(newTestkitCartItem);
    }

    @GetMapping("/TestkitCartItem_log")
    List<TestkitCartItem> getAllTestkitCartItems() {
        return testkitCartItemRepository.findAll();
    }

    @GetMapping("/TestkitCartItem/{id}")
    TestkitCartItem getTestkitCartItemById(@PathVariable Integer id) {
        return testkitCartItemRepository.findById(id)
                .orElseThrow(() -> new TestkitCartItemNotFoundException(id));
    }

    @PutMapping("/TestkitCartItem/{id}")
    TestkitCartItem updateTestkitCartItem(@RequestBody TestkitCartItem newTestkitCartItem, @PathVariable Integer id) {
        return testkitCartItemRepository.findById(id)
                .map(testkitCartItem -> {
                    testkitCartItem.setQuantity(newTestkitCartItem.getQuantity());
                    return testkitCartItemRepository.save(testkitCartItem);
                }).orElseThrow(() -> new TestkitCartItemNotFoundException(id));
    }

    @GetMapping("/TestkitCartItem/user/{userId}")
    public ResponseEntity<List<TestkitCartItem>> findByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(testkitCartItemRepository.findBySignUpUserId(userId));
    }
    @DeleteMapping("/Cart/{id}")
    String deleteUser(@PathVariable Integer id){
        if(!testkitCartItemRepository.existsById(id)){
            throw new TestkitCartItemNotFoundException(id);
        }
        testkitCartItemRepository.deleteById(id);
        return "Test Kit Item by id "+id+" is now removed from the Cart";
    }
    @DeleteMapping("/TestkitCartItem/user/{userId}")
     String deleteByUserId(@PathVariable Long userId) {
        testkitCartItemRepository.deleteAll(testkitCartItemRepository.findBySignUpUserId(userId));
        return "The items from cart are now deleted";
    }


}
