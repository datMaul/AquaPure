package com.backend.aquapurebackend.service;
import com.backend.aquapurebackend.model.TestKitEntry;
import java.util.List;
public interface TestKitService {
    public TestKitEntry findByEmail(String email);
    public TestKitEntry saveUniqueId(TestKitEntry Unique_ID);
    List<TestKitEntry> getAllKitId();
}