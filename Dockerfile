FROM node:13.7.0-stretch

# Copy source code
COPY . .

# Set default command that is called when the container runs
CMD ./run_all_tests.sh
