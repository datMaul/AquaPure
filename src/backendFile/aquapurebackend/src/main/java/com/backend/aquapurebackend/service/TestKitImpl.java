package com.backend.aquapurebackend.service;
import com.backend.aquapurebackend.model.TestKitEntry;
import com.backend.aquapurebackend.repository.TestKitEntryRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestKitImpl implements TestKitService {
    @Autowired
    private TestKitEntryRepositry testKitEntryRepository;
    @Override
    public TestKitEntry findByEmail(String email) {
        return testKitEntryRepository.findByEmail(email);
    }
    @Override
    public TestKitEntry saveUniqueId(TestKitEntry Unique_ID) {
        return testKitEntryRepository.save(Unique_ID);
    }
    @Override
    public List<TestKitEntry> getAllKitId() {
        return testKitEntryRepository.findAll();
    }
}