FROM node:13.7.0-stretch

# Create service directory
RUN mkdir -p /algorithms
WORKDIR /algorithms

# Copy source code
COPY . .

# Set default command that is called when the container runs
CMD ./run_all_tests.sh
